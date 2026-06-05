import { createContext, useContext, useEffect, useState } from 'react';

// 1. Membuat Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 2. Inisialisasi State: Mengecek Local Storage terlebih dahulu
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme; // Gunakan tema yang terakhir dipilih user
      }
      // Kita set default ke 'dark' menyesuaikan palet "Navy" Anda sebelumnya.
      // Anda bisa menggantinya ke 'light' jika ingin default mode terang.
      return 'dark'; 
    }
    return 'dark';
  });

  // 3. Efek Samping (Side Effect): Mengubah class pada elemen HTML
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Hapus class lama agar tidak menumpuk/konflik
    root.classList.remove('light', 'dark');
    
    // Suntikkan class tema aktif secara paksa ke tag <html>
    root.classList.add(theme);
    
    // Simpan preferensi ke Local Storage agar menetap saat web di-refresh
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 4. Fungsi untuk memicu perubahan tema (akan dipanggil oleh tombol)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 5. Custom Hook (Mempermudah pemanggilan di komponen lain)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme harus digunakan di dalam ThemeProvider');
  }
  return context;
};