import Link from "next/link";

import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import Logo from "../../public/assets/Logo.svg";
const Home = () => {
  return (
    <>
      <SeoHead title="Pirvacy Policy | MasterMind" />
      <Layout>
        <div style={{direction:'ltr'}} className="md:px-14" dir="ltr">
          <div className="flex   mt-24 flex-col gap-10 pt-14 items-center text-black	 w-full lg:w-2/2">
            <div class="grid cursor-pointer grid-cols-1 mb-5   px-8 relative">
              <Link href="/" class="cursor-pointer">
                <Logo />
              </Link>
            </div>
            <div class="grid grid-cols-1  px-8 relative text-center	">
              <h1 className="max-w-3xl mt-3 text-2xl  sm:text-3xl font-bold leading-snug tracking-tight text-black lg:leading-tight md:text-4xl ">
                The privacy policy for MisterMind
              </h1>
              <h5 className=" text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md lg:leading-7 xl:leading-7  text-black  md:text-md xl:text-md ">
                Exposition date: 11-30-2023
              </h5>
              <h5 className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md ">
                We thank you for using the MisterMind application, we are
                committed to protecting your privacy and guaranteeing The safety
                of your personal information, this privacy policy explains how
                we are gathered We used and saved your data when you use the
                application. Using an application MisterMind, you agree to the
                practices in the privacy policy These, please review the
                information below to understand our policies and practices For
                personal information.{" "}
              </h5>
            </div>
          </div>
        </div>
        <div style={{direction:'ltr'}} className="flex flex-col items-center text-left">
          <div className="max-w-4xl px-8 md:px-28 pt-14  ">
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Privacy Policy
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                <strong>Alexapps</strong> built the beaat app as a Free app.
                This SERVICE is provided by <strong>Alexapps</strong> at no cost
                and is intended for use as is. This page is used to inform
                visitors regarding my policies with the collection, use, and
                disclosure of Personal Information if anyone decided to use my
                Service. If you choose to use my Service, then you agree to the
                collection and use of information in relation to this policy.
                The Personal Information that I collect is used for providing
                and improving the Service. I will not use or share your
                information with anyone except as described in this Privacy
                Policy. The terms used in this Privacy Policy have the same
                meanings as in our Terms and Conditions, which is accessible at{" "}
                <strong>MasterMind</strong> app unless otherwise defined in this
                Privacy Policy.
              </li>
            </div>

            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Information Collection and Use
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                For a better experience, while using our Service, I may require
                you to provide us with certain personally identifiable
                information, including but not limited to
                photos,name,email,phone. The information that I request will be
                retained on your device and is not collected by me in any way.
                The app does use third party services that may collect
                information used to identify you. Link to privacy policy of
                third party service providers used by the app
              </li>
              <li
                style={{ color: "#3eb9e9" }}
                className="font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-lg xl:text-lg "
              >
                <Link
                  href="https://policies.google.com/privacy"
                  passHref={true}
                >
                  Google Play Services
                </Link>
              </li>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Log Data
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                I want to inform you that whenever you use my Service, in a case
                of an error in the app I collect data and information (through
                third party products) on your phone called Log Data. This Log
                Data may include information such as your device Internet
                Protocol (“IP”) address, device name, operating system version,
                the configuration of the app when utilizing my Service, the time
                and date of your use of the Service, and other statistics.
              </li>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Cookies
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device's internal memory.
                <br />
                <br />
                This Service does not use these “cookies” explicitly. However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services. You
                have the option to either accept or refuse these cookies and
                know when a cookie is being sent to your device. If you choose
                to refuse our cookies, you may not be able to use some portions
                of this Service.
              </li>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Service Providers
              </h4>
              <h5 className="text-black-500 max-w-2xl leading-7  md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md ">
                I may employ third-party companies and individuals due to the
                following reasons:
              </h5>
              <li className="text-black-500 max-w-2xl leading-7  md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                To provide the Service on our behalf;
              </li>
              <li className="text-black-500 max-w-2xl leading-7  md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                To perform Service-related services; or
              </li>
              <li className="text-black-500 max-w-2xl leading-7  md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                To assist us in analyzing how our Service is used.
              </li>
              <h5 className="text-black-500 max-w-2xl leading-7  md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md ">
                I want to inform users of this Service that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
              </h5>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Security
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                I value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and I cannot guarantee its absolute security.
              </li>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Links to Other Sites
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by me. Therefore, I
                strongly advise you to review the Privacy Policy of these
                websites. I have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </li>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Children’s Privacy
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                These Services do not address anyone under the age of 13. I do
                not knowingly collect personally identifiable information from
                children under 13. In the case I discover that a child under 13
                has provided me with personal information, I immediately delete
                this from our servers. If you are a parent or guardian and you
                are aware that your child has provided us with personal
                information, please contact me so that I will be able to do
                necessary actions.
              </li>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Changes to This Privacy Policy
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                I may update our Privacy Policy from time to time. Thus, you are
                advised to review this page periodically for any changes. I will
                notify you of any changes by posting the new Privacy Policy on
                this page. This policy is effective as of 11-30-2023
              </li>
            </div>
            <div>
              <h4 className=" font-bold leading-7 py-2 md:py-4  text-lg   text-black  md:text-2xl xl:text-2xl ">
                Contact Us
              </h4>
              <li className="text-black-500 max-w-2xl leading-7 py-2 md:py-4  text-md md:leading-7 xl:leading-7  text-black  md:text-md xl:text-md   ">
                If you have any questions or suggestions about my Privacy
                Policy, do not hesitate to contact me at{" "}
                <em style={{ color: "#3eb9e9" }}>
                  <a href="https://mastermind.technology/">
                    https://mastermind.technology/
                  </a>{" "}
                </em>{" "}
              </li>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
