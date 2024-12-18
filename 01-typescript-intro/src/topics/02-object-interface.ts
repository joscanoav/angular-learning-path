const skills: string[] = ['Bash','Counter','Healing'];

// asi haya un millon de interfaces no se toma en cuenta como codigo.
//el interface sirve para dar valores a las propiedadesde
interface Character{
    name: string;
    hp: number;
    skills: string[];
    // poner un simbolo de pregunta para que sea opciopnal
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Rivendell';

console.table(strider)

export{};