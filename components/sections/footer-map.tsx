
const OFFICE_ADDRESS =
  "Tầng 18 Tòa nhà CEO Lô HH2-1 KĐT Mễ Trì Hạ, Đường Phạm Hùng, Phường Từ Liêm, TP Hà Nội, Việt Nam";

const OSM_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=105.773%2C21.014%2C105.781%2C21.019&layer=map&marker=21.017%2C105.777";

const GOOGLE_MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

function isAllowedGoogleEmbedUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return false;
    const host = u.hostname.replace(/^www\./, "");
    if (host !== "google.com") return false;
    return u.pathname.startsWith("/maps/embed");
  } catch {
    return false;
  }
}

export function FooterMap() {
  const fromEnv = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL?.trim() ?? "";
  const useGoogleEmbed = fromEnv.length > 0 && isAllowedGoogleEmbedUrl(fromEnv);
  const iframeSrc = useGoogleEmbed ? fromEnv : OSM_EMBED_URL;

  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
      <div className="relative w-full h-[150px]">
        <iframe
          title="Vị trí DCSoftware"
          src={iframeSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
