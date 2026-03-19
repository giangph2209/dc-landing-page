import React, { useState } from "react";
import { MailIcon, SendIcon, PhoneIcon } from "lucide-react";
import ConnectIcon from "@/public/images/connect.png";
import Image from "next/image";
import {
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const serviceOptions = [
  { value: "website_app", label: "Website - App" },
  { value: "landing_page", label: "Tạo Landing Page" },
  { value: "digital_transformation", label: "Hệ thống chuyển đổi số" },
  { value: "360_3d_app", label: "Ứng dụng 360/3D" },
  { value: "ai_app", label: "Ứng dụng AI" },
  { value: "devops_cloud", label: "DevOps & Cloud" },
  { value: "ui_ux_design", label: "UI/UX Design" },
  { value: "others", label: "Others" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    serviceType: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    serviceType?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0|\+84)[0-9]{9,10}$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Vui lòng chọn dịch vụ";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || hasSubmitted) return;

    if (!validate()) return;

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null as any);

      if (!data || data.statusCode !== 201) {
        toast.error(
          data?.message ||
          "Đã xảy ra lỗi khi gửi yêu cầu, vui lòng thử lại sau.",
        );
        return;
      }

      setHasSubmitted(true);
      toast.success(
        data.message ||
        "Cảm ơn bạn đã liên hệ, chúng tôi sẽ phản hồi sớm nhất.",
      );
    } catch (error) {
      toast.error("Không thể kết nối tới máy chủ, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative md:border-none border-t"
      style={{
        backgroundImage: `url('/images/contact.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="py-15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {/* Left - Contact Info */}
            <div className="col-span-1 lg:col-span-1 md:col-span-1 mb-4">
              <h2 className="text-4xl font-bold text-primary mb-4 flex items-center gap-2">
                Liên hệ hợp tác
                <Image src={ConnectIcon} alt="Connect" width={50} height={50} />
              </h2>
              <p className="text-gray-600 mb-8">
                Rất vui vì được trao đổi cùng bạn, Chúng tôi trân trọng với bất
                cứ khách hàng nào! Hãy liên hệ ngay nhé.
              </p>

              {/* Contact Options */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+84349964332"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#0B63E5] to-[#279AE7] text-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <PhoneIcon size={30} />
                  <div>
                    <p className="font-semibold">Gọi tư vấn ngay</p>
                    <p className="text-white/80">034.996.4332</p>
                  </div>
                </a>

                {/* Email/Chat */}
                <a
                  href="mailto:digitalcenturysoftware@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white text-primary rounded-xl hover:shadow-lg transition-all group"
                >
                  <MailIcon size={30} />
                  <div>
                    <p className="font-semibold">Liên hệ qua email</p>
                    <p className="text-gray-600">
                      digitalcenturysoftware@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="col-span-1 lg:col-span-2 md:col-span-1 xl:pl-8 px-4 py-8 rounded-2xl shadow-2xl bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">
                  <div className="col-span-1 lg:col-span-1 md:col-span-1">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={50}
                      placeholder="Nhập tên"
                      className="w-full px-4 py-6 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 ml-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="col-span-1 lg:col-span-1 md:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={15}
                      placeholder="Nhập số điện thoại"
                      className="w-full px-4 py-6 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 ml-1 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email của bạn <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={50}
                      placeholder="your@email.com"
                      className="w-full px-4 py-6 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 ml-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="col-span-1 lg:col-span-1 md:col-span-1">
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Loại dịch vụ <span className="text-red-500">*</span>
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceType:
                            serviceOptions.find(
                              (option) => option.value === value,
                            )?.label || "",
                        }))
                      }
                    >
                      <SelectTrigger className="w-full px-4 py-6 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <SelectValue placeholder="Chọn loại dịch vụ" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        avoidCollisions={false}
                        onCloseAutoFocus={(e: any) => e.preventDefault()}
                      >
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.serviceType && (
                      <p className="text-red-500 text-sm mt-1 ml-1">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nội dung
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Nhập tin nhắn của bạn (tối đa 500 ký tự)"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-6 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || hasSubmitted}
                  className="float-right py-5 cursor-pointer hover:shadow-lg bg-gradient-to-r text-white from-[#6BF2C6] to-[#279AE7] font-semibold rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <SendIcon className="w-4 h-4" />
                  {hasSubmitted
                    ? "Đã gửi yêu cầu"
                    : isSubmitting
                      ? "Đang gửi..."
                      : "Gửi yêu cầu"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
