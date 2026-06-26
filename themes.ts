export const themes = {
  default: {
    background:
      'min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100',
    avatar:
      'w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center',
    links_button:
      'bg-white rounded-2xl p-4 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group',
    links_text:
      'text-slate-800 font-semibold group-hover:text-blue-600 transition-colors',
  },

  ocean: {
    background:
      'min-h-screen bg-gradient-to-br from-cyan-100 via-sky-50 to-blue-200',
    avatar:
      'w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center',
    links_button:
      'bg-white rounded-2xl p-4 border border-cyan-200 shadow-md hover:bg-cyan-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group',
    links_text:
      'text-slate-800 font-semibold group-hover:text-cyan-700 transition-colors',
  },

  forest: {
    background:
      'min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100',
    avatar:
      'w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center',
    links_button:
      'bg-white rounded-2xl p-4 border border-green-200 shadow-md hover:bg-green-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group',
    links_text:
      'text-slate-800 font-semibold group-hover:text-green-700 transition-colors',
  },

  sunrise: {
    background:
      'min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100',
    avatar:
      'w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center',
    links_button:
      'bg-white rounded-2xl p-4 border border-orange-200 shadow-md hover:bg-orange-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group',
    links_text:
      'text-slate-800 font-semibold group-hover:text-orange-600 transition-colors',
  },

  ness: {
    background:
      'press-start min-h-screen text-white bg-gradient-to-br from-gray-800 to-gray-900',
    avatar:
      'w-28 h-28 mx-auto border-4 border-white flex items-center justify-center',
    links_button:
      'bg-white/10 press-start border pixel-corners p-4 hover:bg-white/20 transition-all duration-300 group',
    links_text:
      'text-white group-hover:text-zinc-300',
  },

  arctic: {
    background:
      'min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100',
    avatar:
      'w-24 h-24 mx-auto rounded-full border-4 border-blue-200 shadow-xl bg-white flex items-center justify-center',
    links_button:
      'bg-white rounded-2xl p-4 border border-slate-200 shadow-md hover:bg-sky-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group',
    links_text:
      'text-slate-800 font-semibold group-hover:text-blue-600 transition-colors',
  },

  cherry: {
    background:
      'min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-100',
    avatar:
      'w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center',
    links_button:
      'bg-white rounded-2xl p-4 border border-pink-200 shadow-md hover:bg-pink-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group',
    links_text:
      'text-slate-800 font-semibold group-hover:text-pink-600 transition-colors',
  },

  brutalism: {
    background:
      'min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-blue-100',
    avatar:
      'w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center',
    links_button:
      'bg-white rounded-2xl p-4 border border-slate-200 shadow-md hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group',
    links_text:
      'text-slate-800 font-semibold group-hover:text-blue-600 transition-colors',
  }
} as const;

export type ThemeName = keyof typeof themes;
export type Theme = (typeof themes)[ThemeName];
