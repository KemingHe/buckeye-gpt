"use client";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-5">
      <aside>
        <p className="flex space-x-2">
          <span>Keming He</span>
          <span aria-hidden={true}>&#x2022;</span>
          <span>&#169; {new Date().getFullYear()}</span>
        </p>
      </aside>
    </footer>
  );
}
