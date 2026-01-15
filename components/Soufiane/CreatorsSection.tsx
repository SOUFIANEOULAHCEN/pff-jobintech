"use client";

interface Creator {
  id: number;
  name: string;
  role: string;
  image: string;
}

const CreatorsSection = () => {
  const creators: Creator[] = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "3D Artist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      name: "Emily Chen",
      role: "UI Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      name: "Michael Ross",
      role: "Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 4,
      name: "Sarah Kim",
      role: "Illustrator",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 5,
      name: "David Park",
      role: "Photographer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20 lg:px-36">
      <h2 className="text-3xl font-bold text-foreground mb-10">
        Meet Top Creators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="group bg-white dark:bg-card border border-border/50 rounded-[2rem] p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-muted/30 group-hover:border-primary/20 transition-colors">
              <img
                src={creator.image}
                alt={creator.name}
                className="w-full h-full object-cover"  
              />
            </div>

            <h3 className="font-bold text-lg text-foreground mb-1">
              {creator.name}
            </h3>
            <p className="text-sm font-medium text-muted-foreground/60">
              {creator.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreatorsSection;
