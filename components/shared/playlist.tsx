const Playlist = () => {
  return (
    <section
      className="relative mx-auto my-6 flex max-w-2xl px-6 text-center align-middle sm:my-12"
      aria-label="Running playlist on SoundCloud"
    >
      <div className="w-full">
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2098900255&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <div
          style={{
            fontSize: "10px",
            color: "#cccccc",
            lineBreak: "anywhere",
            wordBreak: "normal",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            fontFamily:
              "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/tim-tumur"
            title="Tim"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            Tim
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/tim-tumur/sets/dontrunfast"
            title="DontRunFast"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#cccccc", textDecoration: "none" }}
          >
            DontRunFast
          </a>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
