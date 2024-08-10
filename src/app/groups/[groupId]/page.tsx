interface SpecificGroupPageProps {
    params: {
        groupId: string;
    };
}
export default function SpecificGroupPage({
    params: { groupId },
}: SpecificGroupPageProps) {
    return (
        <div>
            <h1>SpecificGroupPage</h1>
            <p>{groupId}</p>
        </div>
    );
}
