import { Excuse } from '../../interfaces/excuse';
import ExcuseCard from './Excuse';

interface ExcusesProps {
    excuses: Excuse[];
    setExcuses: React.Dispatch<React.SetStateAction<Excuse[]>>;
}

const Excuses: React.FC<ExcusesProps> = ({ excuses, setExcuses }) => {

    const deleteExcuse = (id: string) => {
        setExcuses(excuses.filter((excuse) => excuse.id !== id));
    };
    const reversedExcuses = [...excuses].reverse();
    return (
        <div>
            {reversedExcuses.map((excuse) => (
                <ExcuseCard
                    key={Math.floor(Math.random() * 1000000)}
                    title={excuse.title}
                    dateCreated={excuse.dateCreated}
                    content={excuse.content}
                    deleteExcuse={() => deleteExcuse(excuse.id)}
                />
            ))}
        </div>
    );
}

export default Excuses;
