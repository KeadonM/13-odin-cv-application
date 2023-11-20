export default function Trademark({ settings }) {
  return (
    <>
      {settings.trademark === true && (
        <div className="watermark">
          <a
            href="https://github.com/keadonm"
            className=" preview-body-3 italic ">
            Created with ResuCraft™
          </a>
        </div>
      )}
    </>
  );
}
