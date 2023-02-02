import Navigationbar from "@/components/navbar/Navigationbar"

function MainLayout({children}) {
  return (
    <>
    <Navigationbar/>
    {children}
    </>
  )
}

export default MainLayout