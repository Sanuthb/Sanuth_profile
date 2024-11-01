import Bottom_nav from "@/components/Home_comp/Bottom_nav";
import Navbar from "@/components/Home_comp/Navbar";
import Search_comp from "@/components/Home_comp/Search_comp";
import homebg from "@/assets/Home/home_bg.jpg";

const page = () => {
  return (
    <main className="min-h-screen text-white w-full bg-black">
      <Navbar />
      <Bottom_nav />      
      <div
        className="flex items-center justify-center flex-col gap-10 p-10 relative bg-cover bg-center h-[85vh] "
        style={{
          backgroundImage: `url(${homebg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat:"no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 bg-black bg-opacity-35 h-full w-full"></div>
        <div className="text-8xl z-10">
          <span className="text-[#4285f4]">G</span>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#4285f4]">g</span>
          <span className="text-[#34a853]">l</span>
          <span className="text-[#ea4335]">e</span>
        </div>
        <div className="z-10">
          <Search_comp />
        </div>
      </div>
    </main>
  );
};

export default page;
