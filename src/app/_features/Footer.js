import PhoneIcon from "../_icons/PhoneIcon";
import EmailIcon from "../_icons/EmailIcon";
import LogoWhite from "../_icons/LogoWhite";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between md:flex-row gap-5 w-full h-fit text-white p-10 bg-blue-600">
        <div>
          <div className="flex gap-2">
            <LogoWhite/>
            <p className="italic">Movie Z</p>
          </div>

          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2.5">
            <p>Contact Information</p>
            <div className="flex items-center gap-2">
              <EmailIcon/>
              <div className="">
                <p>Email:</p>
                <p>support@movieZ.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon/>
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
          <div>
            <p>Follow us</p>
            <div className="flex flex-col gap-2.5 md:flex-row">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
