import Footer from "@/components/Footer";
import Background from "@/components/Home/Background";
import Directors from "@/components/Home/Directors";
import Partner from "@/components/Home/Partner";
import ProjectNic from "@/components/Home/ProjectNic";
import ItemProject from "@/components/Home/ItemProject";

import { FiPhone } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Background />
      <ProjectNic />
      <ItemProject />
      <Directors />
      <Partner />
      <Footer />

      
    </div>
  );
}
