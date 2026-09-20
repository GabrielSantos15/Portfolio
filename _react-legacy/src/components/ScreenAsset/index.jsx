export default function ScreenAsset({ path, alt }) {
  if (!path) return null;

  const extension = path.split(".").pop().toLowerCase();
  const isImage = ["png", "jpg", "jpeg", "webp", "svg", "ico"].includes(extension);

  return isImage ? (
    <img src={path} alt={alt} className="asset-content" width={500} />
  ) : (
    <video
      src={path}
      className="asset-content"
      width={500}
      autoPlay
      loop
      controls
      playsInline
    />
  );
}
