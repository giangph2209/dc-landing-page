'use client'

import React from "react";

interface TwoRowSliderProps {
  columns: React.ReactNode[][];
  /** Số cột hiển thị theo từng breakpoint */
  itemsPerRowConfig?: {
    sm: number; // < 768
    md: number; // 768 - 1023
    lg: number; // >= 1024
    xl: number; // >= 1280
  };
  /** Class cho wrapper mỗi cột */
  columnClassName?: string;
  /** Căn dots: center hoặc start */
  dotsAlign?: "center" | "start";
}

const defaultConfig = { sm: 1, md: 3, lg: 3, xl: 4 };

export function TwoRowSlider({
  columns,
  itemsPerRowConfig = defaultConfig,
  columnClassName = "",
  dotsAlign = "center",
}: TwoRowSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerRow, setItemsPerRow] = React.useState(itemsPerRowConfig.xl);
  const [dragOffset, setDragOffset] = React.useState(0);
  const [isPointerDragging, setIsPointerDragging] = React.useState(false);

  const pointerStartXRef = React.useRef<number | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const trackWidthRef = React.useRef<number>(0);
  const pointerStartTimeRef = React.useRef<number>(0);

  React.useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768) {
        setItemsPerRow(itemsPerRowConfig.sm);
      } else if (window.innerWidth < 1024) {
        setItemsPerRow(itemsPerRowConfig.md);
      } else if (window.innerWidth < 1280) {
        setItemsPerRow(itemsPerRowConfig.lg);
      } else {
        setItemsPerRow(itemsPerRowConfig.xl);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, [itemsPerRowConfig.sm, itemsPerRowConfig.md, itemsPerRowConfig.lg, itemsPerRowConfig.xl]);

  const maxIndex = Math.max(0, columns.length - itemsPerRow);

  React.useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const cardWidthPercent = 100 / itemsPerRow;
  const dragPercent =
    trackWidthRef.current > 0 ? (dragOffset / trackWidthRef.current) * 100 : 0;
  const translatePercent = currentIndex * cardWidthPercent - dragPercent;
  const totalDots = maxIndex + 1;

  const endPointerDrag = React.useCallback(
    (clientX: number, pointerId: number) => {
      if (pointerStartXRef.current == null) return;

      const deltaX = clientX - pointerStartXRef.current;
      const now = performance.now();
      const dt = Math.max(now - pointerStartTimeRef.current, 1); // ms
      const velocity = deltaX / dt; // px/ms, âm = kéo sang trái
      const baseThresholdPx = 16;

      if (trackWidthRef.current > 0 && Math.abs(deltaX) > baseThresholdPx) {
        const deltaPercent = (deltaX / trackWidthRef.current) * 100;
        const deltaColumnsFloat = deltaPercent / cardWidthPercent;

        // boost theo tốc độ: kéo nhanh thì nhảy thêm cột
        const velocityBoost = Math.min(Math.max(Math.abs(velocity) * 0.8, 0), 2); // 0 -> 2
        let stepsFloat = Math.abs(deltaColumnsFloat) + velocityBoost;
        let steps = Math.round(stepsFloat);

        if (steps < 1) steps = 1;
        if (steps > 6) steps = 6; // giới hạn nhảy tối đa 6 cột/lần

        const direction = deltaColumnsFloat < 0 ? 1 : -1;

        setCurrentIndex((prev) => {
          const next = prev + direction * steps;
          if (next < 0) return 0;
          if (next > maxIndex) return maxIndex;
          return next;
        });
      }

      pointerStartXRef.current = null;
      trackWidthRef.current = 0;
      setDragOffset(0);
      setIsPointerDragging(false);

      try {
        trackRef.current?.releasePointerCapture(pointerId);
      } catch {
        // ignore
      }
    },
    [maxIndex],
  );

  const onTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Mouse: chỉ nhận left-click; touch/pen: luôn cho phép để hỗ trợ màn hình cảm ứng (iPad, mobile)
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;

    pointerStartXRef.current = e.clientX;
    pointerStartTimeRef.current = performance.now();
    trackWidthRef.current = track.getBoundingClientRect().width;
    setDragOffset(0);
    setIsPointerDragging(true);

    try {
      track.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const onTrackPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartXRef.current == null) return;
    const deltaX = e.clientX - pointerStartXRef.current;
    if (Math.abs(deltaX) > 2) {
      e.preventDefault();
      setDragOffset(deltaX);
    }
  };

  const onTrackPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartXRef.current == null) return;
    endPointerDrag(e.clientX, e.pointerId);
  };

  const onTrackPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartXRef.current == null) return;
    endPointerDrag(e.clientX, e.pointerId);
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="cursor-grab active:cursor-grabbing select-none touch-pan-y pt-2"
        style={{ userSelect: "none" }}
        onPointerDownCapture={onTrackPointerDown}
        onPointerMove={onTrackPointerMove}
        onPointerUp={onTrackPointerUp}
        onPointerCancel={onTrackPointerCancel}
        onPointerLeave={(e) => {
          if (!trackRef.current?.hasPointerCapture?.(e.pointerId)) return;
          onTrackPointerUp(e);
        }}
      >
        <div
          className={`space-y-4 will-change-transform select-none ${isPointerDragging
            ? ""
            : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            }`}
          style={{
            transform: `translate3d(-${translatePercent}%, 0, 0)`,
            touchAction: "pan-y",
            userSelect: "none",
          }}
        >
          <div className="flex">
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`${columnClassName}`}
                style={{ width: `${cardWidthPercent}%` }}
              >
                <div className="flex flex-col gap-4 h-full">{column}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {totalDots > 1 && (
        <div
          className={`flex gap-3 mt-8 px-3 ${dotsAlign === "start" ? "justify-start" : "justify-center"
            }`}
        >
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-blue-500 w-8"
                : "bg-gray-300 hover:bg-gray-400 w-3"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

