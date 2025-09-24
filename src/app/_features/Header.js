import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-around items-center p-2 bg-white shadow">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.83317 1.1665V17.8332M13.1665 1.1665V17.8332M0.666504 9.49984H17.3332M0.666504 5.33317H4.83317M0.666504 13.6665H4.83317M13.1665 13.6665H17.3332M13.1665 5.33317H17.3332M2.48317 1.1665H15.5165C16.5198 1.1665 17.3332 1.97985 17.3332 2.98317V16.0165C17.3332 17.0198 16.5198 17.8332 15.5165 17.8332H2.48317C1.47985 17.8332 0.666504 17.0198 0.666504 16.0165V2.98317C0.666504 1.97985 1.47985 1.1665 2.48317 1.1665Z"
                stroke="#4338CA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="italic font-bold text-purple-500 text-lg">Movie Z</p>
          </div>
        </Link>

        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 border p-2 rounded-sm">
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path
                d="M1 0.5L5 4.5L9 0.5"
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-sm">Genre</p>
          </div>
          <div className="flex border items-center rounded-sm p-2 gap-3 w-[400px]">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.93311 1.1333C7.30786 1.1333 9.2328 3.05837 9.23291 5.43311C9.23291 6.44873 8.88187 7.38107 8.29346 8.1167L8.01318 8.46631L11.3569 11.8101C11.3633 11.8166 11.3667 11.825 11.3667 11.8335L11.3569 11.8569C11.3439 11.8698 11.3231 11.8697 11.3101 11.8569L7.96631 8.51318L7.6167 8.79346C6.88107 9.38187 5.94873 9.73291 4.93311 9.73291C2.55837 9.7328 0.633301 7.80786 0.633301 5.43311C0.633406 3.05844 2.55844 1.13341 4.93311 1.1333ZM4.93311 1.19971C2.59525 1.19981 0.699813 3.09525 0.699707 5.43311C0.699707 7.77105 2.59519 9.6664 4.93311 9.6665C7.27111 9.6665 9.1665 7.77111 9.1665 5.43311C9.1664 3.09519 7.27105 1.19971 4.93311 1.19971Z"
                fill="#09090B"
                stroke="#09090B"
              />
            </svg>

            <input className="" placeholder="Search..." />
          </div>
        </div>

        <button className=" w-8 h-8 rounded-lg flex items-center justify-center border">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0.5C6.20435 1.29565 5.75736 2.37478 5.75736 3.5C5.75736 4.62522 6.20435 5.70435 7 6.5C7.79565 7.29565 8.87478 7.74264 10 7.74264C11.1252 7.74264 12.2044 7.29565 13 6.5C13 7.68669 12.6481 8.84673 11.9888 9.83342C11.3295 10.8201 10.3925 11.5892 9.2961 12.0433C8.19975 12.4974 6.99335 12.6162 5.82946 12.3847C4.66558 12.1532 3.59648 11.5818 2.75736 10.7426C1.91825 9.90353 1.3468 8.83443 1.11529 7.67054C0.88378 6.50666 1.0026 5.30026 1.45673 4.2039C1.91085 3.10754 2.67989 2.17047 3.66658 1.51118C4.65328 0.851894 5.81331 0.5 7 0.5Z"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Nav;
