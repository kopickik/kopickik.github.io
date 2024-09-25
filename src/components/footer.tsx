import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="row-start-3 flex gap-6 flex-wrap items-center justify-center
        bg-gradient-to-br
        from-cyan-700
        via-pink-700 via-30%
        to-slate-950
        text-yellow-100"
    >
      <p className="copyright">
        by&nbsp;
        <a className="hover:underline" href="https://twitter.com/spoonfedweb" target="_blank">
          @spoonfedweb
        </a>
        &nbsp;&nbsp;🥢&nbsp;🗑️
      </p>
    </footer>
  );
}
