import { useState } from "react";
import { motion } from "framer-motion";
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
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-center text-gray-800"
        >
          Adorable Baby Fashion
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-12 text-center"
        >
          Discover the cutest outfits for your little ones!
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {babyFashionItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-80 object-cover transition-transform duration-300 ease-in-out"
                      style={{
                        transform: hoveredId === item.id ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ease-in-out"
                      style={{
                        opacity: hoveredId === item.id ? 1 : 0,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
