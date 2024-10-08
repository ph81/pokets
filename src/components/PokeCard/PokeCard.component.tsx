import { PokeType } from '../../utils/types';
import { Character, PokeImage, PokeName } from './PokeCard.styles';

interface PokeCardProps {
  pokemon: PokeType;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  return (
    <Character>
      <PokeName>
        <p>{pokemon.name}</p>
      </PokeName>

      <PokeImage>
        <img src={pokemon.sprite} alt={pokemon.name} />
      </PokeImage>
    </Character>
  );
};

export default PokeCard;
