
import { NativeContainerInstance } from './renderer';
import { UnityContext, ObjectDictionary, UnitySchedulerContext } from './native';

declare global {
  const Unity: UnityContext;
  const RootContainer: NativeContainerInstance;
  const NamedAssets: ObjectDictionary;
  const UnityScheduler: UnitySchedulerContext;

  const localStorage: {
    getItem(key: string): string;
    setItem(key: string, value: string): void;
  };
}
