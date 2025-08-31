export default function Avtars() {
  const clients = [
    { src: "https://docs.material-tailwind.com/img/face-2.jpg", alt: "Client 1" },
    { src: "https://docs.material-tailwind.com/img/face-2.jpg", alt: "Client 2" },
    { src: "https://docs.material-tailwind.com/img/face-2.jpg", alt: "Client 3" },
  ];

  return (
      <div className="flex justify-center">
        {clients.map((client, index) => (
          <img
            key={index}
            src={client.src}
            alt={client.alt}
            className={`w-1/4 h-1/4 aspect-square rounded-full border-4 border-white object-cover shadow-md ${
              index !== 0 ? "-ml-6" : ""
            }`}
          />
        ))}
      </div>
  );
}
