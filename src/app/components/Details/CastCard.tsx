import Image from "next/image";

interface CastCardProp {
  actor: {
    name: string;
    character: string;
    profile_path: string;
  };
}

const CastCard = ({ actor }: CastCardProp) => {
  const { name, character, profile_path } = actor;
  const posterBasePath = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

  return (
    <div className="flex flex-col items-center bg-gray-300  p-4 lg:p-6 rounded-lg custom-shadow-card">
      <Image
        src={profile_path ? `${posterBasePath}${profile_path}` : defaultImg}
        alt={name}
        className="w-28 h-28 rounded-3xl mb-4 object-cover"
      />
      <h3 className="text-lg lg:text-xl font-bold mb-2">{name}</h3>
      <p className="text-sm lg:text-lg">Character: {character}</p>
    </div>
  );
};

export default CastCard;
