import './App.css';
import { DirectionProvider } from '@/components/ui/direction';
// router
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <DirectionProvider direction="rtl">
      <AppRoutes />
    </DirectionProvider>
  );
}

export default App;
