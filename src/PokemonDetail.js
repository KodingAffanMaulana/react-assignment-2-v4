import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, Heading, Box } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          <Heading>{pokemon.name}</Heading>
          <HStack>
            {pokemon.types.map((p) => (
              <Badge>{p.type.name}</Badge>
            ))}
          </HStack>
          <HStack>
            <Image src={pokemon.sprites.front_default} alt="Front Default" />
            <Image src={pokemon.sprites.back_default} alt="Back Default" />
            <Image src={pokemon.sprites.front_shiny} alt="Front Shiny" />
            <Image src={pokemon.sprites.back_shiny} alt="Back Shinyt" />
          </HStack>
          <Table>
            <Tbody>
              <Tr>
                <Td>Height</Td>
                <Td>{pokemon.height}</Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td>{pokemon.weight}</Td>
              </Tr>
              <Tr>
                <Td>Base Experience</Td>
                <Td>{pokemon.base_experience}</Td>
              </Tr>
              <Tr>
                <Td>Abilities</Td>
                <Td>
                  {pokemon.abilities.map((p) => (
                    <p>{p.ability.name}</p>
                  ))}
                </Td>
              </Tr>
              <Tr>
                <Td>Stats</Td>
                <Td>
                  {pokemon.stats.map((pok) => (
                    <p>{pok.stat.name} : {pok.base_stat}</p>
                  ))}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon(id)
  }, [id]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
