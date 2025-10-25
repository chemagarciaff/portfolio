import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor que 100px, mostramos la flecha
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null; // no renderiza nada si está arriba

  return (
    <div
      onClick={handleScrollTop}
      className="hidden xl:flex fixed bottom-[30px] right-[30px] justify-center items-center rounded-full bg-[#00000022] p-[23px] hover:p-[30px] transition-all cursor-pointer"
    >
      <svg
        className="w-[20px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" />
      </svg>
    </div>
  );
}
