import { Card, CardContent } from "@/components/ui/card";

const babyFashionItems = [
  { id: 1, alt: "Baby in white onesie", src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" },
  { id: 2, alt: "Baby in blue outfit", src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFieSUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" },
  { id: 3, alt: "Baby in floral dress", src: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnklMjBmYXNoaW9ufGVufDB8fDB8fHww" },
  { id: 4, alt: "Baby in knit sweater", src: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhYnklMjBmYXNoaW9ufGVufDB8fDB8fHww" },
  { id: 5, alt: "Baby in denim overalls", src: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhYnklMjBmYXNoaW9ufGVufDB8fDB8fHww" },
  { id: 6, alt: "Baby in holiday outfit", src: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhYnklMjBmYXNoaW9ufGVufDB8fDB8fHww" },
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
