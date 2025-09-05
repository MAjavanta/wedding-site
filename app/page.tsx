import drawing from './Images/InvitationDrawing.webp'

export default function Home() {
  return (
    <div
      className="min-h-screen bg-black bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${drawing.src})`
      }}
    >
      {/* Your content goes here */}
    </div>
  );
}