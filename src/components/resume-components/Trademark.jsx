export default function Trademark({ settings }) {
  return (
    <>
      {settings.trademark === true && (
        <a
          href="https://github.com/keadonm"
          className="watermark preview-body-3 italic ">
          Created with ResuCraft™
        </a>
      )}
    </>
  );
}
