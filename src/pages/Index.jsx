import { Card, CardContent } from "@/components/ui/card"

const babyFashionItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1522771930-78848d9293e8", alt: "Baby in white onesie" },
  { id: 2, src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9", alt: "Baby in blue outfit" },
  { id: 3, src: "https://images.unsplash.com/photo-1566004100631-35d015d6a491", alt: "Baby in floral dress" },
  { id: 4, src: "https://images.unsplash.com/photo-1519689680058-324335c77eba", alt: "Baby in knit sweater" },
  { id: 5, src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9", alt: "Baby in denim overalls" },
  { id: 6, src: "https://images.unsplash.com/photo-1607979036079-af88d8d9edf4", alt: "Baby in holiday outfit" },
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
                  src={item.src}
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
