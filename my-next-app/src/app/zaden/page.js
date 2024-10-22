// app/zaden/page.js

import Item from '../components/item';

export default function Zaden() {
    return (
      <div>

        <header>
            <h1>Zaden</h1>
            <p>Heb jij een of meerdere zaadjes over en zou je die graag willen ruilen voor een nieuw zaadje? Bekijk hieronder ons aanbod.</p>
        </header>

        <main>
          <section>
            <h2>Ontdek de vreugde van tuinieren met onze populaire</h2>
            <Item />

            <article>
                <h3>Aardbei grootvruchtig Grandian F1</h3>
                <img alt="" src=""></img>
            </article>
          </section>

        </main>
      </div>
    );
  }