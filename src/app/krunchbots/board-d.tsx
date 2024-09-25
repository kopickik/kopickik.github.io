export default function BoardD() {
  return (
    <div className="pl-4 lg:pl-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-8 board-d min-w-screen ">
      <div className="c-1 rounded-lg">
        <div className="h-full flex flex-col">
          <div
            className="text-transparent focus:bg-gradient-to-tr hover:bg-gradient-to-tr from-slate-950 grow c-text-holder text-xs
                                    hover:text-emerald-200 focus:text-emerald-200 p-4 font-semibold rounded-md flex flex-col-reverse
                                    cursor-pointer"
          >
            <div>
              <p>Name: Block Turret</p>
              <p>Experience: Legend </p>
              <p>AI: LangChain / GPTs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-2 rounded-lg">
        <div className="h-full flex flex-col">
          <div
            className="text-transparent focus:bg-gradient-to-tr hover:bg-gradient-to-tr from-slate-950 grow c-text-holder text-xs
                                    hover:text-emerald-200 focus:text-emerald-200 p-4 font-semibold rounded-md flex flex-col-reverse
                                    cursor-pointer"
          >
            <div>
              <p>Name: Fujia Capicomm</p>
              <p>Experience: Legend </p>
              <p>AI: ChainLink</p>
              <p>Bonus: Crypto chat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-3">&nbsp; 🤖</div>
      <div className="c-4">&nbsp; 🤖</div>
      <div className="c-5">&nbsp; 🤖</div>

      <div className="c-6">&nbsp; 🤖</div>
      <div className="c-7">&nbsp; 🤖</div>
      <div className="c-8">&nbsp; 🤖</div>
      <div className="c-9">&nbsp; 🤖</div>
      <div className="c-10">&nbsp; 🤖</div>
    </div>
  );
}
