import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHERS } from '../data';
import { PhilosopherCard } from '../components/PhilosopherCard';
import { Swords, Plus, Trash2, Save, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DeckBuilder: React.FC = () => {
  const navigate = useNavigate();
  const [deck, setDeck] = useState<string[]>(() => {
    const saved = localStorage.getItem('philosophy-deck');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('philosophy-deck', JSON.stringify(deck));
  }, [deck]);

  const addToDeck = (id: string) => {
    if (deck.length >= 10) return;
    if (deck.includes(id)) return;
    setDeck([...deck, id]);
  };

  const removeFromDeck = (id: string) => {
    setDeck(deck.filter((cardId) => cardId !== id));
  };

  const deckCards = deck.map((id) => PHILOSOPHERS.find((p) => p.id === id)).filter(Boolean) as typeof PHILOSOPHERS;

  return (
    <div className="section-spacing">
      <div className="container">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#d4af37]">Nhà chiến lược</h1>
            <p className="text-white/70 max-w-xl">
              Xây dựng Trường phái Tư tưởng cá nhân của bạn. Chọn tối đa 10 triết gia để tạo thành kho vũ khí trí tuệ của bạn.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[#1b0f2f] border border-[#d4af37]/30 px-6 py-3 rounded-xl">
            <div className="text-right">
              <div className="text-xs uppercase tracking-widest text-[#d4af37]/70">Sức chứa bộ bài</div>
              <div className="text-xl font-serif font-bold text-[#d4af37]">{deck.length} / 10</div>
            </div>
            <Swords className="w-8 h-8 text-[#d4af37]" />
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 border-b border-[#d4af37]/20 pb-2">
              <Save className="w-4 h-4 text-[#d4af37]" />
              <h2 className="font-serif text-lg font-semibold text-[#f1d592] uppercase tracking-wider">Bộ bài hiện tại</h2>
            </div>

            {deckCards.length === 0 ? (
              <div className="min-h-[280px] border-2 border-dashed border-[#d4af37]/20 rounded-2xl flex flex-col items-center justify-center text-white/40 space-y-4 p-8">
                <Info className="w-10 h-10" />
                <p className="font-serif italic text-center">Bộ bài của bạn đang trống. Hãy chọn các lá bài từ bộ sưu tập bên dưới.</p>
              </div>
            ) : (
              <div className="card-grid">
                {deckCards.map((p) => (
                  <div key={p.id} className="relative group">
                    <PhilosopherCard philosopher={p} onClick={() => navigate(`/card/${p.id}`)} />
                    <button
                      type="button"
                      onClick={() => removeFromDeck(p.id)}
                      className="absolute -top-2 -right-2 z-10 w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#d4af37]/20 pb-2">
              <Plus className="w-4 h-4 text-[#d4af37]" />
              <h2 className="font-serif text-lg font-semibold text-[#f1d592] uppercase tracking-wider">Nhà tư tưởng sẵn có</h2>
            </div>
            <div className="bg-[#1b0f2f]/50 rounded-xl border border-[#d4af37]/20 overflow-hidden max-h-[600px] overflow-y-auto">
              <div className="p-4 space-y-3">
                {PHILOSOPHERS.map((p) => {
                  const isInDeck = deck.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                        isInDeck ? 'bg-[#d4af37]/10 border-[#d4af37]/40 opacity-70' : 'bg-[#0d0520]/50 border-[#d4af37]/20 hover:border-[#d4af37]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={p.image}
                          alt=""
                          className="w-11 h-11 rounded-full object-cover border border-[#d4af37]/20 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white truncate">{p.name}</div>
                          <div className="text-xs text-[#d4af37]/70 uppercase truncate">{p.school}</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        disabled={isInDeck || deck.length >= 10}
                        onClick={() => addToDeck(p.id)}
                        className="p-2 rounded-lg text-white/50 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                      >
                        {isInDeck ? <Swords className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
