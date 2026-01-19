import NavBar from "@/components/my-comp/NavBar";
import Heading from "../../components/my-comp/Heading";

import React from "react";

function Openings() {
  return (
    <div>
      <NavBar />
      <div className="py-28 p-6 max-w-7xl mx-auto">
        <Heading
          header={"Vacancies"}
          paragraph={"sorry! No Job Openings for now."}
          headstyle={"text-center"}
          pstyle={"font-bold"}
        />
      </div>
    </div>
  );
}

export default Openings;
