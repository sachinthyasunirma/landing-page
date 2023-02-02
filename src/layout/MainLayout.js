import Navigationbar from "@/components/navbar/Navigationbar";

function MainLayout({ children }) {
  return (
    <div className="container-md pt-5">
      <Navigationbar />
      {children}
    </div>
  );
}

export default MainLayout;
