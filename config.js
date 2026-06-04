// Balaji Prints - Configuration Data
const CONFIG = {
    brand: {
        name: "Balaji Prints",
        tagline: "Premium Print & Personalized Design",
        mobile: "9414350535",
        address: "Churu, Rajasthan",
        logoUrl: "logo.png", 
        qrUrl: "qr.png"      
    },
    categories: [
        {
            id: "cat-1",
            name: "Certificate Print",
            description: "High-quality academic & corporate certificates",
            image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80",
            products: [
                { id: "p1-1", name: "Design A (A4 Size)", price: 150, image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80", note: "Delivery Charges Extra" },
                { id: "p1-2", name: "Design B (12x18 Size)", price: 300, image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=500&q=80", note: "Delivery Charges Extra" }
            ]
        },
        {
            id: "cat-2",
            name: "Notes Print",
            description: "Fast and clean document & notes printing",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
            isNotesType: true, 
            products: [
                // Base Price 0.60 + Binding Charge 30 included in system note
                { id: "p2-1", name: "Notes with Binding (Per Page)", price: 0.60, bindingCharge: 30, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80", isPerPage: true, note: "Condition: PDF background must be White. (+ ₹30 Binding Charge will be added to total)" }
            ]
        },
        {
            id: "cat-3",
            name: "Visiting Card",
            description: "Premium business cards to elevate your brand",
            image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500&q=80",
            products: [
                { id: "p3-1", name: "Classic Corporate Layout", price: 1200, image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500&q=80", note: "Fixed: 1000 Cards per order" },
                { id: "p3-2", name: "Modern Minimalist Design", price: 1500, image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500&q=80", note: "Fixed: 1000 Cards per order" },
                { id: "p3-3", name: "Luxury Matte Finish Layout", price: 1800, image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500&q=80", note: "Fixed: 1000 Cards per order" },
                { id: "p3-4", name: "Creative Studio Design", price: 1600, image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=500&q=80", note: "Fixed: 1000 Cards per order" }
            ]
        },
        {
            id: "cat-4",
            name: "Photo Frame",
            description: "Beautifully crafted frames for your memories",
            image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80",
            products: [
                { 
                    id: "p4-1", 
                    name: "A4 Size (8x12 inches) Frame", 
                    price: 450, 
                    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80", 
                    note: "Click to select frame type template",
                    hasSubTypes: true,
                    subTypes: [
                        { id: "st-1-1", name: "Birthday Frame", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80" },
                        { id: "st-1-2", name: "Anniversary Frame", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&q=80" },
                        { id: "st-1-3", name: "Engagement Frame", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80" }
                    ]
                },
                { 
                    id: "p4-2", 
                    name: "12x18 inches Frame", 
                    price: 850, 
                    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80", 
                    note: "Click to select frame type template",
                    hasSubTypes: true,
                    subTypes: [
                        { id: "st-2-1", name: "Birthday Frame", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80" },
                        { id: "st-2-2", name: "Anniversary Frame", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&q=80" },
                        { id: "st-2-3", name: "Engagement Frame", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80" }
                    ]
                }
            ]
        },
        {
            id: "cat-5",
            name: "Photo Collage Frame",
            description: "Multiple memories captured in a single frame",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80",
            products: [
                { id: "p5-1", name: "2 Photo Collage Frame", price: 600, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80", note: "Custom dual layout" },
                { id: "p5-2", name: "4 Photo Collage Frame", price: 800, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80", note: "Grid matrix layout" },
                { id: "p5-3", name: "6 Photo Collage Frame", price: 1100, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80", note: "Premium gallery layout" },
                { id: "p5-4", name: "8 Photo Collage Frame", price: 1400, image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80", note: "Grand celebration layout" }
            ]
        },
        {
            id: "cat-6",
            name: "Spiral Photo Book",
            description: "Personalized flip-through photo albums",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
            products: [
                { id: "p6-1", name: "25 Photos Spiral Book", price: 500, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", note: "Includes custom cover design" },
                { id: "p6-2", name: "50 Photos Spiral Book", price: 900, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", note: "Includes custom cover design" },
                { id: "p6-3", name: "75 Photos Spiral Book", price: 1300, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80", note: "Includes custom cover design" }
            ]
        },
        {
            id: "cat-7",
            name: "Bill Book",
            description: "Professional carbonless duplicate receipt books",
            image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80",
            products: [
                { id: "p7-1", name: "A4 Size Bill Book (Duplicate/2-Copy Set)", price: 350, image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=500&q=80", note: "Carbonless duplicate finish" }
            ]
        },
        {
            id: "cat-8",
            name: "Personalised Pen Print & Custom Orders",
            description: "Laser printed pens & dynamic custom requests",
            image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80",
            isPenType: true, 
            products: [
                { 
                    id: "p8-group-laser", 
                    name: "Laser Printed Pen Pack (Click to choose Qty)", 
                    price: 50, 
                    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80",
                    hasSubTypes: true,
                    isPenPackGroup: true,
                    subTypes: [
                        { id: "p8-pen1", name: "Laser Printed Pen - 1 Qty", price: 50, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-pen2", name: "Laser Printed Pen - 2 Qty", price: 95, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-pen5", name: "Laser Printed Pen - 5 Qty", price: 230, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-pen10", name: "Laser Printed Pen - 10 Qty", price: 440, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-pen20", name: "Laser Printed Pen - 20 Qty", price: 850, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-pen30", name: "Laser Printed Pen - 30 Qty", price: 1200, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-pen40", name: "Laser Printed Pen - 40 Qty", price: 1550, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-pen50", name: "Laser Printed Pen - 50 Qty", price: 1900, isPenPack: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" }
                    ]
                },
                { 
                    id: "p8-group-color", 
                    name: "Single Colour Pen Varieties (Click to choose Code)", 
                    price: 12, 
                    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80",
                    hasSubTypes: true,
                    isSingleColorGroup: true,
                    subTypes: [
                        { id: "p8-c01", name: "Single Colour Pen (Code: 01)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c02", name: "Single Colour Pen (Code: 02)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c03", name: "Single Colour Pen (Code: 03)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c04", name: "Single Colour Pen (Code: 04)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c05", name: "Single Colour Pen (Code: 05)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c06", name: "Single Colour Pen (Code: 06)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c07", name: "Single Colour Pen (Code: 07)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c08", name: "Single Colour Pen (Code: 08)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c09", name: "Single Colour Pen (Code: 09)", price: 12, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c11", name: "Single Colour Pen (Code: 011)", price: 14, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c13", name: "Single Colour Pen (Code: 013)", price: 14, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" },
                        { id: "p8-c14", name: "Single Colour Pen (Code: 014)", price: 14, isSingleColor: true, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80" }
                    ]
                },
                { id: "p8-custom", name: "Other Custom Requirements / Open Request", price: 0, image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80", isDynamic: true, note: "Price discussed on WhatsApp based on requirements" }
            ]
        }
    ]
};