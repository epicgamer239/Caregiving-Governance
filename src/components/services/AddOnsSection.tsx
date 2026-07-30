export default function AddOnsSection() {
  const addOns = [
    { title: "Photo Documentation", price: "$75 per visit" },
    { title: "Family Meeting Facilitation", price: "$225" },
    { title: "Care Plan Document Audit", price: "$150" },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-2">
            Optional Add-Ons
          </h2>
          <p className="text-sm text-slate-600">
            Tailored enhancements to support your governance engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addOns.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/90 rounded-lg p-6 text-center shadow-sm space-y-2"
            >
              <h3 className="font-semibold text-slate-900 text-base">
                {item.title}
              </h3>
              <p className="font-serif text-xl text-[#2B4336] font-medium">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
