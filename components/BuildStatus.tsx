import { useEffect, useState } from "react";
import { WorkflowCard } from "./WorkflowCard";
import { ThirdPartyService } from "../services/thirdPartyService";
import { Workflow } from '../services/models';

export const BuildStatus = () => {
    const [workflows, setWorkflows] = useState<Workflow[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkflows = awyns () => {
            try {
                const result = await ThirdPartyService.fet
            }
        }
    })
}