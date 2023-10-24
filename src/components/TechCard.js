export default function TechCard(props){
  const { cardImage } = props;

  return (
    <div class="relative group">
    <img
      src={cardImage}
      alt="screen 3"
      class="w-24 h-22 grayscale hover:grayscale-0 transition-transform transform hover:scale-105"
    />
    <div class="absolute inset-100 bg-gray-100 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"></div>
  </div>
  )

}