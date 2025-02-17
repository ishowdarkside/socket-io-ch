export const ConnectionManager = ({ onConnect }: { onConnect: () => void }) => {
  return (
    <div>
      <button onClick={onConnect}>KLIKNI ME DA SE KONEKTUJES</button>
    </div>
  );
};
