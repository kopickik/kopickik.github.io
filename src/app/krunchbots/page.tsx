import Image from 'next/image';
import spsvg from '../../img/spoonfedweb.svg';
import spicon from '../../img/spfw-icon.svg';
import BoardD from './board-d';
import Footer from '@/components/footer';
import Link from 'next/link';
import { InferSelectModel } from 'drizzle-orm';
import { characters } from '@/db/schema';
import { db } from '@/db';

type Character = InferSelectModel<typeof characters>;

export default async function Krunchbots() {
  const characterData: Character[] = await db.select().from(characters);
  return (
    <>
      <div className="bg-one main-bg min-h-screen bg-center bg-cover bg-no-repeat">
        <div className="overlay-bg">
          <div className="flex justify-center p-4">
            <Link href="/">
              <Image src={spsvg} alt="spoonfedweb" className="object-cover" height={280} />
            </Link>
          </div>
          <div className="flex justify-center p-4">
            <Image src={spicon} alt="test" height={192} />
          </div>
          <div className="flex justify-center space-y-16 text-yellow-300">
            <div className="md:text-8xl text-6xl text-center pt-16 font-extrabold font-honk px-6">
              SELECT YOUR CHARACTER
            </div>
          </div>
          <BoardD characters={characterData} />
          <div className="flex justify-center">
            <h1 className="font-jacquard text-9xl text-gr-rainbow">HELLO WORLD</h1>
          </div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
