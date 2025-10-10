import { CheckmarkIcon } from "@/icons/checkmark-icon";
import { Feature } from "@/types";

interface FeaturesProps {
  features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <div className="text-panda-text mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
      {features.map((feature) => (
        <div key={feature.name} className="relative pl-9">
          <dt className="text-panda-text inline font-semibold">
            <CheckmarkIcon
              aria-hidden={true}
              className="absolute top-1 left-1 size-5"
            />
            {feature.name}
          </dt>{" "}
          <dd className="inline">{feature.description}</dd>
        </div>
      ))}
    </div>
  );
};

export default Features;
