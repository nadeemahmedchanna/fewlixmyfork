export default function Avtars() {
  const clients = [
    { src: "https://docs.material-tailwind.com/img/face-2.jpg", alt: "Client 1" },
    { src: "https://docs.material-tailwind.com/img/face-2.jpg", alt: "Client 2" },
    { src: "https://docs.material-tailwind.com/img/face-2.jpg", alt: "Client 3" },
    { src: "/logo4.png", alt: "Client 4" }
  ];

  return (
      <div className="flex justify-center">
        {clients.map((client, index) => (
          <img
            key={index}
            src={client.src}
            alt={client.alt}
            className={`w-15 h-15 rounded-full border-4 border-white object-cover shadow-md ${
              index !== 0 ? "-ml-6" : ""
            }`}
          />
        ))}
      </div>
  );
}
