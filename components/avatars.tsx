import Avvvatars from 'avvvatars-react';

const NAMES = [
  'Le Bond',
  'John Doe',
  'Tyler Okonma',
  'Ava Max',
  'Enrique Iglesias',
  'Ariana Grande',
];

export const Avatars = () => {
  return (
    <div className="group: flex items-center">
      {NAMES.map((name) => {
        return (
          <div key={name} className="-ml-2 group-first:ml-0">
            <Avvvatars size={30} style="shape" value={name} />
          </div>
        );
      })}
    </div>
  );
};
