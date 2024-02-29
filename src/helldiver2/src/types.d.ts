type Stratagem = {
  id: string;
  name: string;
  icon: string;
  sequence: string;
};

type Data = {
  missions: Stratagem[];
  defensives: Stratagem[];
  supply_backpacks: Stratagem[];
  supply_weapons: Stratagem[];
  offensive_orbitals: Stratagem[];
  offensive_eagle: Stratagem[];
};
