import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { designPortfolioItems } from "@/lib/data";

export default function DesignPortfolio() {
  return (
    <section>
      <div className="p-global-padding my-12">
        <h1 className="text-3xl font-bold mb-12 text-center">
          Mechanical Design Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designPortfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.platform.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`grid ${
                      item.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                    } gap-2`}
                  >
                    {item.images.slice(0, 4).map((img, index) => (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto">
                            <Image
                              src={img}
                              alt={`${item.name} design ${index + 1}`}
                              width={300}
                              height={200}
                              className="w-full h-auto object-cover rounded-md cursor-pointer"
                            />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-screen overflow-y-auto">
                          <div className="relative">
                            <Image
                              src={img}
                              alt={`${item.name} design ${index + 1}`}
                              width={1200}
                              height={800}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </div>
                  {item.images.length > 2 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-12 flex items-end justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="secondary" className="mb-2">
                            View All ({item.images.length} images)
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-screen overflow-y-auto">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {item.images.map((img, index) => (
                              <Dialog key={index}>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="p-0 h-auto"
                                  >
                                    <Image
                                      src={img}
                                      alt={`${item.name} design ${index + 1}`}
                                      width={400}
                                      height={300}
                                      className="w-full h-auto object-cover rounded-md cursor-pointer"
                                    />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-screen overflow-y-auto">
                                  <div className="relative">
                                    <Image
                                      src={img}
                                      alt={`${item.name} design ${index + 1}`}
                                      width={1200}
                                      height={800}
                                      className="w-full h-auto object-contain"
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </CardContent>
              {item.description && (
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
