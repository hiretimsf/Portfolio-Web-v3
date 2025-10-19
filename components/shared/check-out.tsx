import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import checkout from "@/constants/checkout";
import { CheckoutItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CheckOut = () => {
  return (
    <div className="bg-panda-prune mx-auto w-full max-w-7xl border-t border-gray-200 py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-panda-text decoration-panda-orange mx-auto mb-10 text-center text-3xl font-bold tracking-tight underline decoration-wavy underline-offset-6 sm:text-4xl">
          Check out my
        </h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {checkout.map((item: CheckoutItem) => (
            <Link href={item.link} key={item.name}>
              <Card
                key={item.name}
                className="h-full gap-2 rounded-none rounded-b-md border border-gray-200 py-0 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative w-full">
                  <Image
                    alt={item.name}
                    src={item.image}
                    width={250}
                    height={250}
                    priority={true}
                    className="w-full rounded-none"
                  />
                </div>
                <CardHeader className="py-2">
                  <CardTitle className="text-panda-text text-lg/6">
                    {item.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
