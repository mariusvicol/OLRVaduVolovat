const PlanZbor = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Plan de Zbor</h1>
        <p className="text-gray-600 text-lg">Programul antrenamentelor și concursurilor ORL Vadu Volovat</p>
      </div>

      {/* Antrenamente */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-primary">Antrenamente ORL Vadu Volovat</h2>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { numar: 1, distanta: '5KM' },
                { numar: 2, distanta: '10KM' },
                { numar: 3, distanta: '20KM' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between group hover:bg-white/50 p-4 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <span className="w-14 h-14 rounded-full bg-primary/20 text-primary text-xl font-bold flex items-center justify-center mr-5">
                      {item.numar}
                    </span>
                    <span className="text-gray-700 text-xl">Antrenament</span>
                  </div>
                  <span className="font-bold text-primary text-xl group-hover:text-primary/80 transition-colors">
                    {item.distanta}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { numar: 4, distanta: '35KM' },
                { numar: 5, distanta: '50KM' },
                { numar: 6, distanta: '65KM' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between group hover:bg-white/50 p-4 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <span className="w-14 h-14 rounded-full bg-primary/20 text-primary text-xl font-bold flex items-center justify-center mr-5">
                      {item.numar}
                    </span>
                    <span className="text-gray-700 text-xl">Antrenament</span>
                  </div>
                  <span className="font-bold text-primary text-xl group-hover:text-primary/80 transition-colors">
                    {item.distanta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Concursuri */}
      <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-primary">Concursurile ORL Vadu Volovat în anul 2025</h2>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm">
          <div className="space-y-4">
            {[
              { numar: 1, concurs: 'HotSpot', localitate: 'Roman', distanta: '140KM' },
              { numar: 2, concurs: 'HotSpot', localitate: 'Adjud', distanta: '175KM' },
              { numar: 3, concurs: 'HotSpot', localitate: 'Targul Bujor', distanta: '255KM' },
              { numar: 4, concurs: 'Semifinala', localitate: 'Brăila', distanta: '330KM' },
              { numar: 5, concurs: 'Finala', localitate: 'Medgidia', distanta: '430KM' },
              { numar: 6, concurs: 'Derby', localitate: 'Vama Veche', distanta: '496KM' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between group hover:bg-white/50 p-4 rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className="w-14 h-14 rounded-full bg-primary/20 text-primary text-xl font-bold flex items-center justify-center mr-5">
                    {item.numar}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-gray-700 text-xl font-semibold">{item.concurs}</span>
                    <span className="text-gray-500">{item.localitate}</span>
                  </div>
                </div>
                <span className="font-bold text-primary text-xl group-hover:text-primary/80 transition-colors">
                  {item.distanta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanZbor; 