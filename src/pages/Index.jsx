import { Card, CardContent } from "@/components/ui/card";

const babyFashionItems = [
  { id: 1, alt: "Baby in white onesie" },
  { id: 2, alt: "Baby in blue outfit" },
  { id: 3, alt: "Baby in floral dress" },
  { id: 4, alt: "Baby in knit sweater" },
  { id: 5, alt: "Baby in denim overalls" },
  { id: 6, alt: "Baby in holiday outfit" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Adorable Baby Fashion</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">Discover the cutest outfits for your little ones!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {babyFashionItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg"
                  alt={item.alt}
                  className="w-full h-64 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
