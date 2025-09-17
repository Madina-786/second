const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  heading2:
    " font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading3: " font-semibold xs:text-[20px] text-[20px] pe-20  pt-5 text-black",
  heading4:
    " font-semibold xs:text-[30px] text-[30px] pe-20  pt-5 mt-5 text-black",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  flexCenter: "flex text-center justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  button:
    "py-2 px-8 bg-gray-400 text-black hover:bg-gray-500 hover:text-white rounded-sm mt-5 ms-20 font-semibold",
  button2:
    " absolute left-20 top-70 py-2 px-8 bg-gray-400 hover:bg-gray-500 hover:text-white rounded-sm font-semibold mb-20",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const layout1 = {
  navStyle: "flex gap-5 pt-6 font-semibold",
  heroAll:
    "bg-gray-200 flex flex-row justify-center p-5 mt-10 me-5 ms-5 rounded-md ",
  cards:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 max-w-6xl w-full",
  card2: "flex flex-wrap gap-6 justify-center items-center pt-5 mt-5",
  image: "w-[200px] h-52 rounded-md",
  setting: "grid grid-cols-2 gap-5 mt-5 p-5",
  label: "text-black font-bold",
  sector:
    " border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 mt-3",
};

export default styles;
