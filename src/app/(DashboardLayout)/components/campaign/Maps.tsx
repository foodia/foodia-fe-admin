import BaseCard from "../shared/DashboardCard";
import React from "react";
import LeafLet from "../shared/LeafLet";
import dynamic from "next/dynamic";

interface ChildProps {
  data: {
    latitude: any;
    longitude: any;
  };
}

const Maps: React.FC<ChildProps> = ({ data }) => {
  const Map = React.useMemo(
    () => dynamic(() => import("../shared/LeafLet"), { ssr: false }),
    []
  );

  return (
    <BaseCard title="Location">
      <Map lat={data.latitude} long={data.longitude} />
    </BaseCard>
  );
};

export default Maps;
