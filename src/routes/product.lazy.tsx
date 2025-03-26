import { products } from "@/lib/constant";
import { createLazyFileRoute } from "@tanstack/react-router";
import VendingMachine from "@/assets/product/1.png";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/product")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Be Snacks: Prototype Showcase - <br />
          Do You Want to Be a Snack?
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Unwrap the flavors of Rwanda through our healthy range of snacks made
          from freshly harvested crops, straight from the source.
        </p>
        <p className="mt-4 font-bold">
          WE PROMISE TO NOT GIVE YOU BAGS OF AIR!
        </p>
      </div>

      {/* Vending Machine Section */}
      <div className="bg-amber-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={VendingMachine}
                alt="Be Snacks Vending Machine"
                width={300}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg font-medium">
                Efficient, reliable, and user-friendly, it's the perfect
                addition to any location.
              </p>
              <p className="mt-4">
                A vending solution designed to meet your specific needs.
                Featuring a sleek, modern design and advanced technology, our
                vending machines offer a diverse range of snacks and beverages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-[#FFF5CC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={cn(
                "py-12 border-t border-[#949896] flex flex-col items-center gap-8",
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row",
                index === 0 ? "border-t-0" : ""
              )}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  loading="lazy"
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-gray-600">{product.intro}</p>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="mb-4">{product.description}</p>
                <p className="font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
