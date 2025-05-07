import Button from '@/components/inputs/Button';

const Home = () => {
  return (
    <main className="h-screen w-full flex flex-col gap-4 bg-white items-center justify-center">
      <h1 className="text-4xl font-bold">Basis Transport</h1>
      <Button to={'/auth/login'}>Login</Button>
    </main>
  );
};

export default Home;
